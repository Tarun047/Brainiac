package com.bytecoders.brainiac.usermanagement.repository;

import com.bytecoders.brainiac.usermanagement.models.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
public interface UserRepository extends ReactiveMongoRepository<User,String> {
}
