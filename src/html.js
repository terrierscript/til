// @ts-nocheckss
import React from "react"
import { MetaHeader } from "../app/meta/MetaHeader"
import { logVersion } from "./version"
import { TwitterTracking } from "../app/meta/TwitterTracking"
import { HelmetItem } from "../app/meta/HelmetItem"

logVersion()
export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ja">
        <MetaHeader {...this.props} />

        <body>
          <HelmetItem />
          <TwitterTracking />
          　revert
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
