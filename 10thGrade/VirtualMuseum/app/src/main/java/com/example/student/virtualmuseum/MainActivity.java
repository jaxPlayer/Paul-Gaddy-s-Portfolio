package com.example.student.virtualmuseum;
import android.content.Intent;
import android.app.Activity;
import android.view.View.OnClickListener;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;



public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void
    openGoddessesActivity(View view) {
        Intent i = new Intent(this, GoddessesActivity.class);
        startActivity(i);
    }
    public void
    openGodsActivity(View view) {
        Intent i = new Intent(this, GodsActivity.class);
        startActivity(i);
    }
}
