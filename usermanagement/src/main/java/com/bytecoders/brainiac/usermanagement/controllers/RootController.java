package com.bytecoders.brainiac.usermanagement.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class RootController {

    @GetMapping("/")
    @ResponseBody
    public Flux<String> getRoot() {
        return Flux.just("Alive");
    }
}
