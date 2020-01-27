import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled.input`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
`;

const ContentInput = styled(TextareaAutosize)`
width: 100%;
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "",
      content: props.content || "",
      id: props.id || null
    };
  }
  render() {
    const { title, content } = this.state;
    return (
      <>
        <TitleContainer>
          <TitleInput
            value={title}
            onChange={this._onInputChange}
            placeholder={"Untitled..."}
            name={"title"}
          />
          <Button onClick={this._onSave}>Save</Button>
        </TitleContainer>
        <ContentPreview>
          <ContentInput
            value={content}
            onChange={this._onInputChange}
            placeholder={"# This supports makdown!"}
            name={"content"}
          />

          <Markdown source={content} />
        </ContentPreview>
      </>
    );
  }
  _onInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
  _onSave = () => {
    const { onSave } = this.props;
    const { title, content, id } = this.state;
    onSave(title, content, id);
  };
}
