import React from 'react';
import Tabs from './Tabs';
import {
  ExpandButton,
  MinusButton,
  TimesButton,
} from './buttons';
import './WindowPane.css';

export default () => (
  <div className="WindowPane" style={{ width: 640, height: 390 }}>
    <div className="WindowPane__header">
      <ul>
        <li><TimesButton /></li>
        <li><MinusButton /></li>
        <li><ExpandButton /></li>
      </ul>
      <span>戻る</span>
      <span>進む</span>
      <span>更新</span>
      <input type="text" value="https://www.yahoo.co.jp" />
    </div>
    <div className="WindowPane__middle">
      <Tabs />
      <div className="WindowPane__content">
        <webview className="webView" src="https://www.yahoo.co.jp" />
      </div>
    </div>
    <div className="WindowPane__footer" style={{ display: 'none' }}>
      ステータス
    </div>
  </div>
);
