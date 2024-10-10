import React, { useState } from 'react';
import LogoAnimationLoader from ' .. /components/Loading/LogoAnimationLoader';
// https://blog.bitsrc.io/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958
export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
    function HOC(props) {
        const [isLoading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading);

        };
        return (
            <>
                {isLoading && <LogoAnimationLoader message={loadingMessage} />}
                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        );

        return HOC;
    };
}
export default IsLoadingHOC;
