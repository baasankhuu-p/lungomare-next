import {
  AboutSection,
  Angebot,
  Footer,
  Getranke,
  Header,
  HomeSection,
  NewsLetter,
  Pizza,
  Recently,
  Salat,
  Uberbackenes,
  Wein,
} from "@/component";
import { Container, Divider, Flex, Tabs } from "@mantine/core";
import React from "react";

const Body = () => {
  return (
    <div>
      <Header />

      <main class="main">
        <HomeSection />
        <AboutSection />

        <section class="section">
          <Container mx={"auto"}>
            <Tabs
              defaultValue="PIZZERIA"
              variant="pills"
              radius="xl"
              color="cyan">
              <Flex justify={"center"}>
                <Tabs.List fw={700}>
                  <Tabs.Tab
                    leftSection={
                      <img
                        src="/assets/icon/pizza.png"
                        width={24}
                        height={24}
                      />
                    }
                    value="PIZZERIA">
                    PIZZERIA
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="ÜBERBACKENES"
                    leftSection={
                      <img
                        src="/assets/icon/cookie.png"
                        width={24}
                        height={24}
                      />
                    }>
                    ÜBERBACKENES
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="SALAT"
                    leftSection={
                      <img
                        src="/assets/icon/salat.png"
                        width={24}
                        height={24}
                      />
                    }>
                    SALAT
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="GETRÄNKE"
                    leftSection={
                      <img
                        src="/assets/icon/drink.png"
                        width={24}
                        height={24}
                      />
                    }>
                    GETRÄNKE
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="WEIN"
                    leftSection={
                      <img src="/assets/icon/wein.png" width={24} height={24} />
                    }>
                    WEIN
                  </Tabs.Tab>
                </Tabs.List>
              </Flex>

              <Tabs.Panel value="PIZZERIA">
                <Pizza />
              </Tabs.Panel>
              <Tabs.Panel value="ÜBERBACKENES">
                {" "}
                <Uberbackenes />
              </Tabs.Panel>
              <Tabs.Panel value="SALAT">
                {" "}
                <Salat />
              </Tabs.Panel>
              <Tabs.Panel value="GETRÄNKE">
                <Getranke />
              </Tabs.Panel>
              <Tabs.Panel value="WEIN">
                <Wein />
              </Tabs.Panel>
            </Tabs>
            <Divider />
          </Container>
        </section>

        <Angebot />
        <Recently />
        <NewsLetter />
      </main>

      <Footer />
    </div>
  );
};

export default Body;
