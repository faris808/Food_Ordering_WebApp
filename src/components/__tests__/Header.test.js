import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded
  const logo=header.getAllByTestId("logo");
  console.log(logo);
});

test("check for cart items 0", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart=header.getByTestId("cart");
    expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart-0</a>");
});


