import React from "react";
import ReactDOM from "react-dom";
import { provider, toFactory, inject } from "react-ioc";
import {
  AuthService,
  CommentService,
  DataContext,
  PostService,
  StorageService
} from "./services";
import { PostList } from "./components/PostList";
import { PostLayout } from "./components/PostLayout";

@provider(AuthService, PostService, CommentService, StorageService, [
  DataContext,
  toFactory(DataContext.create)
])
class App extends React.Component {
  @inject storageService: StorageService;

  componentDidMount() {
    this.storageService.init();
  }

  render() {
    return (
      <>
        <aside>
          <PostList />
        </aside>
        <main>
          <PostLayout />
        </main>
      </>
    );
  }
}

const container = document.getElementById("root");

ReactDOM.render(<App />, container);

window.addEventListener("beforeunload", () => {
  ReactDOM.unmountComponentAtNode(container);
});
