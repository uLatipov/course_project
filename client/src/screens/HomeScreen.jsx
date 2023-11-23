import { Row, Col } from "react-bootstrap";
import { useGetPostsQuery } from "../slices/postsApiSlice";

import Loader from "../components/Loader";

const HomeScreen = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  console.log(posts);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          <Col>Data was downloaded</Col>
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
