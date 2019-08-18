// This is a bit anti-pattern and hacky, considering that we should not change `props`.
// However, this helps us to make Next.js's `getInitialProps` a consistent behavior for the native app.
import React from "react";

interface WrapperProps {
  class: any;
  getInitialProps?: any;
  props?: any;
}

interface WrapperState {
  initProp: any;
}

export default class Wrapper extends React.Component<
  WrapperProps,
  WrapperState
> {
  constructor(props) {
    super(props);
    this.state = { initProp: {} };
  }

  async componentDidMount(): Promise<void> {
    const { class: WrappedClass, getInitialProps: param } = this.props;
    if (typeof WrappedClass.getInitialProps === "function") {
      this.setState({
        initProp: await WrappedClass.getInitialProps(param),
      });
    }
  }

  render(): React.ReactNode {
    const { class: WrappedClass, props: parentProps } = this.props;
    const { initProp } = this.state;
    return <WrappedClass {...parentProps} {...initProp} />;
  }
}
