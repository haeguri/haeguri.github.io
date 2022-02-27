import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

const Test: React.FC<{ className: string; children: string }> = ({
  children,
  className,
}) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={dracula}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="p-5 overflow-x-scroll" style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Test;
