const withEnhancedBtn = (WrappedButton) => {
    // HOC Component
    const EnhancedButton = (props) => {
      const modifiedProps = {
        ...props,
        style: { color: "blue", fontSize: 150 },
      };
      return <WrappedButton {...modifiedProps} />;
    };
    return EnhancedButton;
  };
  
  export default withEnhancedBtn;