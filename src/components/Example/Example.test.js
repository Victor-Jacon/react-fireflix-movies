import renderer from "react-test-renderer";
import Example from "./Example";

it("renders correctly", () => {
  const tree = renderer
    .create(<Example page="http://www.facebook.com">Facebook</Example>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
