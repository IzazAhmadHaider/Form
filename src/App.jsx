import React from 'react'

import {
  TextInput,
  Button,
  Select,
  Paper,
  Textarea,
  Title,
  Box,
  Text,
  FileInput,
  Container,
  Flex,
  Stack,
  Image,
  Loader,
  LoadingOverlay,
  Alert,
} from "@mantine/core";





function App() {
    function handleTicketSubmit() {
        console.log("Form Submitted")
        
    }
  return (
    <div>
      <form onSubmit={handleTicketSubmit}>
          <div className="flex flex-1 w-full">
            <div className=" w-[75%]">
                {/* added error boundry to show form validation error */}
                {
                  
                    // <Alert color="red" icon={<IconAlertCircle />}>
                    //   <Text color="red">{error}</Text>
                    // </Alert>
                }
              <Paper
                className="flex-grow flex mt-12"
                radius={"10px"}
                withBorder
              >
                
                <Box
                  className="rounded-l-full flex-1 items-center justify-center"
                  display="flex"
                >
                  <Text color="brand" className="font-bold text-sm">
                    Problem Type
                  </Text>
                </Box>
                <Select
                  classNames={{
                    input: "rounded-r-[10px] relative",
                  }}
                  required
                  name="category_id"
                  size="sm"
                  variant="filled"
                  className="flex-[3]"
                //   data={categories.map((category) => ({
                //     value: category.id,
                //     label: category.name,
                //   })
                />
              </Paper>
              <Paper
                className="flex-grow flex mt-12"
                radius={"10px"}
                withBorder
              >
                <Box
                  className="rounded-l-full flex-1 items-center justify-center"
                  display="flex"
                >
                  <Text color="brand" className="font-bold text-sm">
                    'Title'
                  </Text>
                </Box>
                <TextInput
                  placeholder='Enter Map Problem'
                  className="flex-[3]"
                  variant="filled"
                  classNames={{
                    input: "rounded-r-[10px] relative",
                  }}
                  size="sm"
                  name="title"
                  required
                />
              </Paper>
              <Paper
                className="flex-grow flex mt-12"
                radius={"10px"}
                withBorder
              >
                <Box
                  className="rounded-l-lg flex-1 items-center justify-center"
                  display="flex"
                >
                  <Text color="brand" className="font-bold text-sm">
                    Description
                  </Text>
                </Box>
                <Textarea
                  variant="filled"
                  className="flex-[3]"
                  classNames={{
                    input: "rounded-r-[10px] relative",
                  }}
                  size="sm"
                  placeholder='Please describe your issue in detail, with any relevant information including device platform aa version affected, steps taken leading to the issue, which period of time this proble is go on etc.'
                  name="description"
                  multiline
                  required
                />
              </Paper>
              <Paper
                className="flex-grow flex mt-12"
                radius={"10px"}
                withBorder
              >
                <Box
                  className="rounded-l-full flex-1 items-center justify-center"
                  display="flex"
                >
                  <Text color="brand" className="font-bold text-sm">
                    Priority
                  </Text>
                </Box>
                <Select
                  variant="filled"
                  placeholder='Select priority'
                  className="flex-[3]"
                  classNames={{
                    input: "rounded-r-[10px] relative",
                  }}
                  size="sm"
                //   data={priorities.map((priority) => ({
                //     value: priority.id,
                //     label: priority.name,
                //   })
                  name="priority_id"
                  required
                />
              </Paper>

              <Paper
                className="flex-grow flex mt-12"
                radius={"10px"}
                withBorder
              >
                <Box
                  className="rounded-l-full flex-1 items-center justify-center"
                  display="flex"
                >
                  <Text color="brand" className="font-bold text-sm">
                    Attachments
                  </Text>
                </Box>
                <FileInput
                  // label='Max file size 512KB'
                  labelProps={{ className: "text-[10px]" }}
                //   icon={<IconPaperclip size={23} className="text-sky-600" />}
                  size="sm"
                  placeholder= 'Attach File Or Drop Files Here To Upload'
                  multiple
                  name="file"
                  // error={error}
                  variant="filled"
                  className="flex-[3] bg-[#F5F7F9]"
                  classNames={{ input: "rounded-r-[10px] relative" }}
                  // accept="image/png,image/jpeg"
                />
              </Paper>
              <p className="text-xs mt-4 ml-[2px]">
                To protect your privacy, please do not include Any personal information in your request. Review our
                <a href="#" className="text-sky-600">
                  privacy statement
                </a>{" "}
                for more information.
              </p>
              <div className="justify-end items-end flex">
                <Button type="submit">
                  Submit
                </Button>
              </div>
            </div>
            <div className="w-[25%] ml-12 mt-10">
              <h2 className=" font-bold text-[16px] text-[#0E76BB]">'Popular Topics From FAQS Library'</h2>
              <ul className="list-without-bullets max-h-[355px] font-thin  space-y-5 text-[15px] ml-8 mt-5 scroll text-left pl-2 pt-[1px]">
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'How to reload your Map views' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'Main reason of map bags' </a></li>
                <li><a className=" hover:text-blue-400 hover:font-bold" href="">'In Mobile Application Application Works Correctly But in Desktop Application Does Not' </a></li>
              
               
              </ul>
            </div>
          </div>
        </form>
    </div>
  )
}

export default App
