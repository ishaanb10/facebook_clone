package facebookclone.facebook.Repository;

import facebookclone.facebook.Entity.Status;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface StatusRepo extends MongoRepository<Status, UUID> {
    @Query("{userID:?0}")
    List<Status>getAll(String userID);

    @Query(value = "{userID:?0}",delete = true)
    void deleteAllStatus(String userID);

}
