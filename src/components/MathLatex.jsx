import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Component to render text with Markdown bold (**text**) and LaTeX math ($...$ or TeX code)
 */
export const MathLatex = ({ text = '', displayMode = false, className = '' }) => {
  if (!text) return null;

  // Function to render raw latex string safely with enhanced sizing for Grade 5
  const renderLatexString = (latexStr, isDisplay = false) => {
    try {
      let formattedTex = latexStr;
      // Prepend \displaystyle for inline fractions so numbers aren't shrunken
      if (!isDisplay && (formattedTex.includes('\\frac') || formattedTex.includes('\\dfrac') || formattedTex.includes('\\times'))) {
        formattedTex = '\\displaystyle ' + formattedTex;
      }

      return katex.renderToString(formattedTex, {
        displayMode: isDisplay,
        throwOnError: false,
        output: 'html'
      });
    } catch (e) {
      console.error('KaTeX rendering error:', e);
      return latexStr;
    }
  };

  // Helper to parse markdown bold **text** and inline TeX $...$
  const parseContent = (input) => {
    const parts = [];
    const mathRegex = /\$(.*?)\$/g;
    let lastIndex = 0;
    let match;

    while ((match = mathRegex.exec(input)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: input.substring(lastIndex, match.index) });
      }
      parts.push({ type: 'math', content: match[1] });
      lastIndex = mathRegex.lastIndex;
    }

    if (lastIndex < input.length) {
      parts.push({ type: 'text', content: input.substring(lastIndex) });
    }

    return parts;
  };

  // Process text that may also contain pure TeX commands like \frac or \times without explicit $
  const containsRawTex = text.includes('\\frac') || text.includes('\\times') || text.includes('\\neq') || text.includes('\\%');

  if (containsRawTex && !text.includes('$')) {
    const html = renderLatexString(text, displayMode);
    return (
      <span 
        className={`inline-block font-sans ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const parts = parseContent(text);

  return (
    <span className={`inline-wrap ${className}`}>
      {parts.map((part, i) => {
        if (part.type === 'math') {
          const html = renderLatexString(part.content, false);
          return (
            <span
              key={i}
              className="inline-block mx-1 align-middle"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        // Render bold text **bold**
        const textSegment = part.content;
        const boldParts = textSegment.split(/(\*\*.*?\*\*)/g);

        return (
          <span key={i}>
            {boldParts.map((sub, j) => {
              if (sub.startsWith('**') && sub.endsWith('**')) {
                return (
                  <strong key={j} className="font-extrabold text-slate-900">
                    {sub.slice(2, -2)}
                  </strong>
                );
              }
              return sub;
            })}
          </span>
        );
      })}
    </span>
  );
};
