package com.bytecoders.brainiac.usermanagement.services;

import com.bytecoders.brainiac.usermanagement.models.User;
import com.bytecoders.brainiac.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Mono<User> addUser(User user){
        return userRepository.save(user);
    }

    public Flux<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public Mono<User> getUser(String id)
    {
        return userRepository.findById(id);
    }

    public void deleteUser(String id)
    {
        userRepository.deleteById(id);
    }
}
