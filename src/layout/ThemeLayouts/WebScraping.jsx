/**
 * https://time-is-life.fun/mui-react-hook-form-typescript/
 * https://frontendshape.com/post/react-mui-5-with-react-hook-form-image-upload-example
 * https://codevoweb.com/react-rtk-query-react-hook-form-and-material-ui-multipart-formdata/
 * https://stackoverflow.com/questions/72616152/i-am-trying-to-upload-file-using-react-hook-form-and-i-used-usecontroller-functi
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout';
import { HttpService } from '@/service/http/HttpService';
import { DOMAIN_NAME } from '../../../config/HTTP_URL_Settings';
import { ServerEndpoints } from '@/service/http/serverEndpoint';

const file_upload_content = {
  headline: 'Web Scraping',
  content: 'Scraping a web page and fetching it and extracting from it. '
};

const baseUrl = `${DOMAIN_NAME}/${ServerEndpoints.WEB_SCRAPING}`;
function WebScraping(props) {
  const [textContent, setTextContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [axiosRespose, setAxiosRespose] = useState("");;
  const [timeStamp, setTimeStamp] = useState(null);
  const [status, setStatus] = useState("initial"); // "initial" | "uploading" | "success" | "fail"

  var info = {

    mobileInfo: {
      // brands: navigator.userAgentData.brands,
      // isMobile: navigator.userAgentData.mobile,
      // platform: navigator.userAgentData.platform
    },
    timeOpened: new Date(),
    timezone: (new Date()).getTimezoneOffset() / 60,

    pageon: window.location.pathname,
    referrer: document.referrer,
    previousSites: history.length,
    browserName: navigator.appName,
    browserEngine: navigator.product,
    browserVersion1a: navigator.appVersion,
    browserVersion1b: navigator.userAgent,
    browserLanguage: navigator.language,
    browserOnline: navigator.onLine,
    browserPlatform: navigator.platform,
    javaEnabled: navigator.javaEnabled(),
    dataCookiesEnabled: navigator.cookieEnabled,
    dataCookies1: document.cookie,
    dataCookies2: decodeURIComponent(document.cookie.split(";")),
    dataStorage: localStorage,

    sizeScreenW: screen.width,
    sizeScreenH: screen.height,
    sizeDocW: document.width,
    sizeDocH: document.height,
    sizeInW: innerWidth,
    sizeInH: innerHeight,
    sizeAvailW: screen.availWidth,
    sizeAvailH: screen.availHeight,
    scrColorDepth: screen.colorDepth,
    scrPixelDepth: screen.pixelDepth,

  };

  // declare the data fetching function
  const fetchData = async () => {

    const AxiosHTTP_client = new HttpService(baseUrl, "GET")
    const response = await AxiosHTTP_client.get(baseUrl, "GET", clientInformation);
    console.log('result:', response)
    setAxiosRespose(response);
    return response
  }

  useEffect(() => {
    console.log('useEffect isLoading:', isLoading);

    setStatus("uploading");

    // setTextContent(true)
    try {
      setIsLoading(true);

      fetchData();

      setIsLoading(false);

      console.log('axiosRespose result:', axiosRespose)
      if (axiosRespose) {
        // setResults(result)
        // setIsLoading(false);
      }

    } catch (e) {
      console.log('onSubmitForm3:', e)
      // setIsError(true)
      return
    }

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  // Handle Redux state

  useEffect(() => {
    // console.log('useEffect textContent:', textContent)
    // if (isFocused) {
    //   const loadSessions = async () => {
    //     if (client?.id) {
    //       dispatch(await loadClientSessions(client?.id));
    //     }
    //   };
    //   loadSessions(props);
    // }

    // // revoke object URL to avoid memory leaks
    // return () => {
    //   if (textContentPreview)
    //   dispatch(unloadSessions()); // Cleaning up here... 
    // reset();
    // }
  }, [textContent]);

  return (
    <Container maxWidth="sm" sx={{ py: 0 }}>

      <Stack component="div" >


        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          {(isLoading ? <CircularProgress /> : <section>{axiosRespose ?.data ?.serverUrl}</section>)}
          {
            // (!isError && 1) ? <div style={{ color: `red` }}>some error occurred, while fetching api</div> : <p>ppp</p>
          }
        </Box>
      </Stack>
    </Container>
  );
}


const WebScrapingLayout = withHeaderFooterLayout(WebScraping, file_upload_content);

export default WebScrapingLayout;