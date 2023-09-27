import "@testing-library/jest-dom";
import { render, waitFor,fireEvent, getByTestId } from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer=body.getByTestId("shimmer");
//   expect(shimmer).toBeInTheDocument(); //you can also do this way, but this is not a good way
  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});

test("Restaurant should load on homepage", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(()=>expect(body.getByTestId("search-btn")))
    const reslist=body.getByTestId("res-list");
    expect(reslist.children.length).toBe(15);
    console.log(reslist);
});

test("search for dhaba string on homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=>expect(body.getByTestId("search-btn")))
  const input=body.getByTestId("search-input");
  fireEvent.change(input,{
    target:{
      value:"dhaba",
    },
  });
  const searchbtn=body.getByTestId("search-btn");
  fireEvent.click(searchbtn);
  const reslist=body.getByTestId("res-list");
  expect(reslist.children.length).toBe(2);
});