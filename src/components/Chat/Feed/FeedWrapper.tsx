import { Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";

interface FeedWrapperProps{
    session: Session;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({session}) => {

  const router = useRouter();

  const { conversationId } = router.query;

  return (
    <Flex width="100%" direction="column">
      {conversationId ? (
        <Flex>
          
        </Flex>
      ) : (
        <div>No Conversation Selected</div>
      )}
    </Flex>
  )
}

export default FeedWrapper