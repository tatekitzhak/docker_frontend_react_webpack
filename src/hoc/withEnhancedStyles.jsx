/**
 * https://javascriptpatterns.vercel.app/patterns/react-patterns/higher-order-component
 */

export function withEnhancedStyles(Component) {
    return (props) => {
      const style = {
        color: "red",
        fontSize: "1em",
        // Merge props
        ...props.style,
      };
  
      return <Component {...props} style={style} />;
    };
  }