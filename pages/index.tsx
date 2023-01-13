import { DefaultLayout } from "@/layouts/apps/DefaultLayout";
import { Container, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PageTitle } from "@/layouts/shared/PageTitle";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Container mt={12}>
        <Container display={{ base: "md", lg: "2xl" }} mx="auto">
          <PageTitle
            title="This is title"
            subtitle="This is subtitle"
          />
          <Stack spacing={4} mt={8}>
            </Stack>
        </Container>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
