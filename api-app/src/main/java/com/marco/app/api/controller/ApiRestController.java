package com.marco.app.api.controller;

import com.marco.app.api.model.Hello;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiRestController {

    @GetMapping("/api/hello")
    public ResponseEntity<Hello> sayHello() {
        final Hello hello = new Hello();
        hello.setHello("CIAO Mondo!!!");

        return ResponseEntity.ok(hello);
    }
}
