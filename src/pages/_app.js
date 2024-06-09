import "@/styles/globals.css";
import { MantineProvider, createTheme } from "@mantine/core";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
