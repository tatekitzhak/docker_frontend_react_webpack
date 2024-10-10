import React from "react";

// https://dev.to/maniruzzamanakash/make-react-higher-order-component-hoc-an-easy-one-2noa

const withPageLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    return (
      <div>
        <header>
            Some Header Content
        </header>

        {/* Called The Component Parameter  */}
        <PageComponent />

        <footer>
            Some Footer Content
        </footer>

    </div>
    );
  };
};

export default withPageLayout;