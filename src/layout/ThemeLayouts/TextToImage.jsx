/**
 * https://time-is-life.fun/mui-react-hook-form-typescript/
 * https://frontendshape.com/post/react-mui-5-with-react-hook-form-image-upload-example
 * https://codevoweb.com/react-rtk-query-react-hook-form-and-material-ui-multipart-formdata/
 * https://stackoverflow.com/questions/72616152/i-am-trying-to-upload-file-using-react-hook-form-and-i-used-usecontroller-functi
 */

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout'
import { HttpService } from '@/service/http/HttpService';
import { baseUrl, ServerEndpoints } from '@/service/http/serverEndpoint';

const file_upload_content = {
  headline: 'Convert Text to Image',
  content: 'Convert Your Text to Image, input text or upload any Text File '
};

// Initail form values
const defaultValues = {
  'formData': {
    email: "",
    text: '',
    timeStamp: null,
    baseURI: ''
  }
};

// Validation rules
const validationRules = {
  name: {
    required: 'Please input todo name',
    maxLength: { value: 30, message: 'Name must be 30 characters or less' },
  },
  description: {
    maxLength: { value: 1000, message: 'Description must be 1000 characters or less' },
  },
  priority: {
    required: 'Please select a priority',
  }
};

function TextUploadForm(props) {
  const [textContent, setTextContent] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({});
  const [timeStamp, setTimeStamp] = useState(null);
  const [status, setStatus] = useState("initial"); // "initial" | "uploading" | "success" | "fail"
  
  var info = {
    
    mobileInfo: {
      // brands: navigator.userAgentData.brands,
      // isMobile: navigator.userAgentData.mobile,
      // platform: navigator.userAgentData.platform
    },
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,

    pageon: window.location.pathname,
    referrer: document.referrer,
    previousSites: history.length,
    browserName: navigator.appName,
    browserEngine: navigator.product,
    browserVersion1a:navigator.appVersion,
    browserVersion1b:navigator.userAgent,
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

  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({
    defaultValues,
    mode: 'onChange',  // The `onChange` might cause perf issue...
  });

  const onSubmitForm = async (data) => {

    //event.preventDefault();

    if (data.textContent && data.formData.timeStamp) {
      

      const clientInformation = {
        data: data.formData,
        geographicLocation: {},
        timeStamp: data.formData.timeStamp,
        info: info
      };
      
      setStatus("uploading");
      console.log('onSubmitForm1:', data)

      // setTextContent(true)
      try {

        setIsLoading(true);
        const AxiosHTTP_client  = new HttpService(baseUrl, "POST")
        const result = await AxiosHTTP_client.post(baseUrl, "POST", clientInformation)
        console.log('result:', result.data)

        // const data = await result.json();

       
        if(result.data){
          setResults(result.data)
          setIsLoading(false);
        }

      } catch (e) {
        // handle your error
        console.log('onSubmitForm3:', e)
        // setIsError(true)
        return
      }
    }

  }

  useEffect(() => {
    console.log('useEffect isLoading:', isLoading)
  }, [isLoading]);

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


  // Validation rule for audio files
  function extensionsValidation(fileList) {
    // allowedTypes

    if (0) {
      return true;

    }
    return false;
  }
  /**
   * https://stackoverflow.com/questions/70645907/validating-a-child-input-type-file-with-react-hook-form-and-yup
   */
  const textAreaValidation = {
    required: 'A text filed is required', // true
    pattern: {
      value: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, // OR =>  ^[\w ]*[^\W_][\w ]*$ 
      message: 'Please enter an only english  alphabet, and number',
    },
    maxLength: {
      value: 10,
      message: "Description must be at most 10 characters long",
    },
    // minLength: (v) => v.length >= 5,
    // matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
    validate: (e) => {
      console.log('validate:', e)
      /* 
            let isValidate = extensionsValidation(e)
            if (0) {
              return true;
            } else {
              return 'Invalid file format. Only file (type declaration files) files are allowed.';
            } */
    },
    onChange: (event) => {
      event.preventDefault()
      const val2 = event.nativeEvent.data;
      console.log('onChange:', event.nativeEvent.srcElement.baseURI);
      setTimeStamp(event.timeStamp);
      setValue("formData", { 'email': '', 'text': '', 'clientURI': event.nativeEvent.srcElement.baseURI, 'timeStamp': event.timeStamp });

      let isValidate = extensionsValidation(event)

      if (isValidate) {
        setTextContent(event);
      }
    },
    // onBlur:function(){},
    // ref: function(){}
  };

  const onInvalidSubmitForm = (e) => {
    console.log('onInvalidSubmitForm:', e)
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Submit a Form and Send Data to an API
      </Typography>

      <Stack component="form" onSubmit={handleSubmit(onSubmitForm, onInvalidSubmitForm)} spacing={3}>
        <Controller
          name="file"
          control={control}
          // rules={audioValidation.validate}
          defaultValues=""
          render={({ field: { onChange, onBlur, value, name, ref, ...field }, fieldState: { invalid, isTouched, isDirty, error } }) => {

            return (
              <TextField
                {...field}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                type="textArea"
                label="Input a text"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors ?.textContent ?.message} // true or false
                helperText={errors ?.textContent ?.message}
                {...register('textContent', {
                  ...textAreaValidation
                })}

              />
            )
          }}
        />

        {/* Priority */}
        {/* <Controller
          name="priority"
          control={control}
          rules={audioValidation.validate()}
          render={({ field, fieldState }) => (
            <FormControl fullWidth error={!!fieldState.error ?.message}>
              <InputLabel id="area-label">Priority</InputLabel>

              <FormHelperText>{fieldState.error ?.message}</FormHelperText>
            </FormControl>
          )}
        /> */}

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Button type="submit" color="primary"
            variant="contained"
            startIcon={<CloudDownloadIcon />}
          >
            Submit
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          {(isLoading ? <CircularProgress /> : <section>{results.serverUrl}</section>)}
          {
            // (!isError && 1) ? <div style={{ color: `red` }}>some error occurred, while fetching api</div> : <p>ppp</p>
          }
        </Box>

        {textContent && (
          <section>
            File details:
          <ul>
              <li>Name: {textContent[0] ?.name}</li>
              <li>Type: {textContent[0] ?.type }</li>
              <li>Size: {textContent[0] ?.size} bytes</li>
            </ul>
          </section>
        )}
      </Stack>
    </Container>
  );
}


const TextUploadFormLayout = withHeaderFooterLayout(TextUploadForm, file_upload_content);

export default TextUploadFormLayout;