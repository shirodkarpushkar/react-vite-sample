import { CSSProperties } from "react";

enum GlobalStyleKeys {
    ts1 = 'ts1',
    ts2 = 'ts2',
    gridcenter = 'gridcenter',
    w100 = 'w100',
    mt8 = 'mt8',
    z4 = 'z4',
    fleft = 'fleft',
    mlr8 = 'mlr8',
    cursorGrab = 'cursorGrab',
  }
  
  type GlobalStyle = {
    [key in GlobalStyleKeys]: CSSProperties;
  };
  export const globalStyles: GlobalStyle = {
    ts1: { width: '500px', margin: '20px' },
    ts2: { padding: 0, margin: 0 },
    gridcenter: {
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    },
    w100: { width: '100%' },
    mt8: { marginTop: 8 },
    z4: { zIndex: 4 },
    fleft: { float: 'left' },
    mlr8: { marginLeft: 8, marginRight: 8 },
    cursorGrab: { cursor: 'grab' },
  };
  