package com.bytecoders.brainiac.usermanagement.controllers;

import com.bytecoders.brainiac.usermanagement.models.User;
import com.bytecoders.brainiac.usermanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(value = "/add")
    public @ResponseBody Mono<User> createUser(@Valid @RequestBody User user)
    {
        return userService.addUser(user);
    }

    @GetMapping(value = "/find/{uid}")
    public @ResponseBody  Mono<User> getUser(@PathVariable(value = "uid")String uid)
    {
        return userService.getUser(uid);
    }

    @DeleteMapping(value = "/delete/{uid}")
    public @ResponseBody boolean deleteUser(@PathVariable(value = "uid")String uid)
    {
        if(userService.getUser(uid)!=null) {
            userService.deleteUser(uid);
            return true;
        }
        return false;
    }

    @PutMapping(value = "/update")
    public @ResponseBody Mono<User> updateUser(@Valid @RequestBody User user)
    {
        return userService.addUser(user);
    }

    @GetMapping(value = "/list")
    public @ResponseBody Flux<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

}
