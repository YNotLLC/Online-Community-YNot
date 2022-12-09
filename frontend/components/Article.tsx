import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  id: number;
  category: string;
  title: string;
  content: string;
  uploadedAt: string;
}

const Article = (props: Props) => {
  return (
    <Link href={`/${props.category}/${props.id}`}>
      <Stack
        bg="gray.100"
        p={2}
        borderRadius={10}
        h={140}
        justify="space-between"
      >
        <Text
          fontWeight="bold"
          dangerouslySetInnerHTML={{ __html: props.title }}
        ></Text>
        <Box
          overflow="hidden"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "3",
          }}
        >
          <Text
            fontSize="sm"
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></Text>
        </Box>
        <Text
          fontSize="sm"
          dangerouslySetInnerHTML={{ __html: props.uploadedAt }}
        ></Text>
      </Stack>
    </Link>
  );
};

export default Article;
