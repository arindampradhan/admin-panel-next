import type { NextPage } from 'next';
import React, { Component } from 'react';
import Background from '@/components/Background';
import Button from '@/components/Button';
import ProgressIndicator from '@/components/ProgressIndicator';

interface ExampleProps {
  selectedIndex: number;
  values: Array<string>;
}

interface State {
  selectedIndex: number;
}

class Example extends Component<ExampleProps, State> {
  static defaultProps = {
    selectedIndex: 0,
    values: ['first', 'second', 'third']
  };

  state = {
    selectedIndex: this.props.selectedIndex
  };

  /* eslint-disable */
  /* prettier-ignore */
  handleSelect = ({
    event,
    index: selectedIndex,
  }: {
    event: React.MouseEvent<HTMLButtonElement>;
    index: number;
  }): void => {
    this.setState({ selectedIndex });
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      selectedIndex: prevState.selectedIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      selectedIndex: prevState.selectedIndex + 1,
    }));
  };

  render() {
    const { values } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div className='flex items-center justify-between'>
        <Button isDisabled={selectedIndex === 0} onClick={this.handlePrev}>
          Prev
        </Button>
        <ProgressIndicator
          selectedIndex={selectedIndex}
          values={values}
          onSelect={this.handleSelect}
        />
        <Button
          isDisabled={selectedIndex === values.length - 1}
          onClick={this.handleNext}
        >
          Next
        </Button>
      </div>
    );
  }
}




const DesignSystem: NextPage = () => {
  return (
    <Background background="white ">
      <Example/>
    </Background>
  );
};

export default DesignSystem;
