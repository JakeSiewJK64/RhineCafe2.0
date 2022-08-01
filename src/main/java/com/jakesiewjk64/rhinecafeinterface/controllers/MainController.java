package com.jakesiewjk64.rhinecafeinterface.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v2/main/")
public class MainController {
    @GetMapping("/hello")
    public ResponseEntity<?> getHello(){
        return ResponseEntity.ok().body("hello world");
    }
}
