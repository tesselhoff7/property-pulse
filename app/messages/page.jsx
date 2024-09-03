import connectDB from "@/config/database";
import Message from "@/models/Message";
import "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";

const MessagesPage = async () => {
  const sessionUser = await connectDB();
  const { userId } = sessionUser;

  return <div>messages</div>;
};

export default MessagesPage;
