import { Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  content: string;
  uploadedAt: string;
}

const Article = (props: Props) => {
  return (
    <Stack bg="gray.100" p={2} borderRadius={10}>
      <Text
        fontWeight="bold"
        dangerouslySetInnerHTML={{ __html: props.title }}
      ></Text>
      <Text
        fontSize="sm"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></Text>
      <Text
        fontSize="sm"
        dangerouslySetInnerHTML={{ __html: props.uploadedAt }}
      ></Text>
    </Stack>
  );
};

export default Article;
