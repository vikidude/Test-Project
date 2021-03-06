package com.awesomeproject;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import android.content.Intent;
import android.os.Bundle;
import android.net.Uri;

public class MainActivity extends ReactActivity {

@Override
protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
         @Override
            protected Bundle getLaunchOptions() {

                Intent intent = MainActivity.this.getIntent();
                Bundle bundle = new Bundle();
                Uri imageUri = intent.getParcelableExtra(Intent.EXTRA_STREAM);
                if (imageUri != null) {
                    bundle.putString("image", imageUri.toString());
                }else{
                    bundle.putString("image", "");
                }
                
                return bundle;
            }
    };
}
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }
}
