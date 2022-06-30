//
//  SampleHandler.swift
//  testRN-ScreenShare
//
//  Created by Parth Agrawal on 30/06/22.

import ReplayKit
import TeachmintSdk

class SampleHandler: RPBroadcastSampleHandler {
    let builder = screenShareBuilder(suiteName: "group.teachmint.ios.app.appgroup")

    override func broadcastStarted(withSetupInfo setupInfo: [String : NSObject]?) {
        builder.startShare(self)
    }

    override func broadcastPaused() {
    }

    override func broadcastFinished() {
        builder.stopShare()
    }

    override func processSampleBuffer(_ sampleBuffer: CMSampleBuffer, with sampleBufferType: RPSampleBufferType) {
        builder.processBuffer(sampleBuffer, with: sampleBufferType)
    }
}
