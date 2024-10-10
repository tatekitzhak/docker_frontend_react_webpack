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
  Grid,
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

import withHeaderFooterLayout from '@/hoc/withHeaderFooterLayout'

import { DOMAIN_NAME } from '../../../config/HTTP_URL_Settings';
import { ServerEndpoints } from '@/service/http/serverEndpoint';

const server_api = 'http://18.117.15.244/transcribe';
// const server_api = 'http://localhost:4000/transcribe';

// const baseUrl = `${DOMAIN_NAME}/${ServerEndpoints.UPLOAD_FILE}`;

// const baseUrl = `http://18.117.15.244:4000/nginx_test`;

// const baseUrl = `http://18.117.15.244/nginx_node_test`;

// const baseUrl = `${ENV.TRANSCRIBE_API.BASE_URL}/${ServerEndpoints.UPLOAD_FILE}`;
const baseUrl = `http://localhost:8080/${ServerEndpoints.UPLOAD_FILE}`;

// const baseUrl = `http://convertotext.com/${ServerEndpoints.UPLOAD_FILE}`;

const file_upload_content = {
  headline: 'Convert Audio to Text',
  content: 'To show how to use Material UI with React Hook Form, we will build a complete form with the most-used input components provided by Material UI: the text input, radio input, dropdown, date, checkbox, and slider. The form will also have reset functionality. It will look like this:'
};

// Initail form values
const defaultValues = {
  name: '',
  description: '',
  priority: 1,
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

function UploadAudioFileForm(props) {
  const [audioFile, setAudioFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState('');
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState("initial"); // "initial" | "uploading" | "success" | "fail"

  const { register, handleSubmit, reset, control, setValue, formState: { errors } } = useForm({
    defaultValues,
    mode: 'onChange',  // The `onChange` might cause perf issue...
  });

  // build FormData for uploading Audio File
  const onSubmitForm = async (data) => {

    if (data.audioFile) {
      setStatus("uploading");
      // console.log('onSubmitForm1:', data.audioFile[0])
      const audioFile = data.audioFile[0];
      const formData = new FormData();
      formData.append("file", audioFile);
      // setAudioFile(true)
      try {
        setIsLoading(true);
/* 
        // make axios post request
        const response = await axios({
          method: "POST",
          url: "/api/login",
          data: loginFormData,
          headers: { 
            "Content-Type": "multipart/form-data",  
          "Content-Type": "multipart/form-data", 
        },
        });
         */
        const result = await fetch(baseUrl, {
          // mode: 'no-cors',
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log('data:',data);
        if (data) {
          setResults(data.stdout)
          setIsLoading(false);
        }

      } catch (e) {
        // handle your error
        console.log('onSubmitForm3:', e)
        setIsError(true)
        return
      }
    }

  }

  useEffect(() => {
    console.log('useEffect isLoading:', isLoading)
  }, [isLoading]);

  // Handle Redux state

  useEffect(() => {
    // console.log('useEffect audioFile:', audioFile)
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
    //   if (AudioFilePreview)
    //   dispatch(unloadSessions()); // Cleaning up here... 
    // reset();
    // }
  }, [audioFile]);


  // Validation rule for audio files
  function extensionsValidation(fileList, fileLength) {
    // allowedTypes
    const allowedExtensions = ['audio/mp3', 'audio/mp4', 'audio/wav', 'audio/x-wav', 'audio/x-m4a', 'audio/mpeg', 'audio/mpeg'];

    if (fileLength && allowedExtensions.includes(fileList)) {
      return true;

    }
    return false;
  }
  /**
   * https://stackoverflow.com/questions/70645907/validating-a-child-input-type-file-with-react-hook-form-and-yup
   */
  const audioValidation = {
    // required: 'An audio file is required1',
    validate: (fileList) => {
      // fileList.stopPropagation();
      // event.preventDefault();
      const file = fileList[0];
      console.log('fileList[0]:', fileList[0])
      let isValidate = extensionsValidation(file ?.type, fileList.length)
      if (isValidate) {
        return true;
      } else {
        return 'Invalid file format. Only audio (mp3/mp4/wav) files are allowed.';
      }
    },
    onChange: (fileList) => {
      // fileList.stopPropagation();
      // event.preventDefault();

      const file = fileList.target.files;
      const fileType = fileList.target.files[0] ?.type;

      let isValidate = extensionsValidation(fileType, file.length)

      if (isValidate) {
        setAudioFile(fileList.target.files);
      }
    },
    // onBlur:function(){},
    // ref: function(){}
  };

  const onInvalidSubmitForm = (e) => {
    console.log('onInvalidSubmitForm:', e)
  };

  return (
    <Grid item  maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        File Upload Form: Convert Audio to Text
      </Typography>

      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmitForm, onInvalidSubmitForm)} spacing={3}>
        <Controller
          name="file"
          control={control}
          // rules={audioValidation.validate}
          defaultValue=""
          render={({ field: { onChange, onBlur, value, name, ref, ...field }, fieldState: { invalid, isTouched, isDirty, error } }) => {

            return (
              <TextField
                {...field}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                type="file"
                label="Upload a file"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors ?.audioFile ?.message} // true or false
                helperText={errors ?.audioFile ?.message}
                {...register('audioFile', {
                  // required: "The field is required",
                  ...audioValidation
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
            Convert
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          {(isLoading ? <CircularProgress /> : <section>{results}</section>)}
          {
            // (!isError && 1) ? <div style={{ color: `red` }}>some error occurred, while fetching api</div> : <p>ppp</p>
          }
        </Box>
        {audioFile && (
          <section>
            File details:
          <ul>
              <li>Name: {audioFile[0] ?.name}</li>
              <li>Type: {audioFile[0] ?.type }</li>
              <li>Size: {audioFile[0] ?.size} bytes</li>
            </ul>
          </section>
        )}
      </Stack>
    </Grid>
  );
}


const UploadAudioFileFormLayout = withHeaderFooterLayout(UploadAudioFileForm, file_upload_content);

export default UploadAudioFileFormLayout;