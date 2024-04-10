import React, { memo, useEffect, useRef, useState } from "react";
import { Editor, View } from "@tarojs/components";
import "./index.scss";
import { Plus } from "@nutui/icons-react-taro";
import { Button, Drag, FixedNav } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
const Index = memo(() => {
  const [visible, setVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(240);
  const editorRef = useRef();
  const [detailHtml, setDetailHtml] = useState(null);
  useEffect(() => {
    return () => {};
  }, []);
  const change = (value) => {
    getFocus();
    setVisible(value);
  };
  const selected = (item, event) => {
    getFocus();
    event.preventDefault();
    console.log(item, event);
  };

  const editBlur = (event) => {
    console.log(event.detail);
    setKeyboardHeight(300);
    setDetailHtml(event.detail);
  };

  const getFocus = () => {
    console.log(editorRef.current);
    editorRef.current.parentNode.parentNode.focus();
  };

  const submitData = () => {
    Taro.navigateBack(-1);
  };

  const editReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        console.log(res.context);
      })
      .exec();
  };
  const editFocus = () => {
    setTimeout(() => {
      Taro.onKeyboardHeightChange((res) => {
        setKeyboardHeight(res.height);
      });
    }, 500);
  };
  return (
    <>
      <View className={"editWrapper"}>
        <div className={"toolbox"}>
          <Drag
            direction="y"
            style={{ right: "0px", bottom: keyboardHeight + "px" }}
          >
            <FixedNav
              position={{ top: "280px", right: "0" }}
              type="right"
              visible={visible}
              onChange={change}
              onSelect={selected}
              content={<Plus color="#fff" size={30} />}
            >
              <ul className="nut-fixednav-list">
                <li className="nut-fixednav-list-item">
                  <Button icon={<div>B</div>}></Button>
                </li>
                <li className="nut-fixednav-list-item">
                  <Button
                    icon={<div style={{ fontStyle: "italic" }}>I</div>}
                  ></Button>
                </li>
                <li className="nut-fixednav-list-item">
                  <Button icon={<>图</>}></Button>
                </li>
                <li className="nut-fixednav-list-item">
                  <Button icon={<>视</>}></Button>
                </li>
                <li className="nut-fixednav-list-item">
                  <Button></Button>
                </li>
                <li className="nut-fixednav-list-item">
                  <Button></Button>
                </li>
              </ul>
            </FixedNav>
          </Drag>
        </div>
        <Editor
          ref={editorRef}
          id={"editor"}
          showImgSize
          showImgToolbar
          showImgResize
          placeholder={"请输入文字..."}
          class="ql-container"
          onFocus={editFocus}
          onBlur={editBlur}
          onReady={editReady}
        />
      </View>
      <View className={"toolboxBottom"}>
        <Button onClick={submitData} block type={"primary"}>
          保存
        </Button>
      </View>
    </>
  );
});

export default Index;
