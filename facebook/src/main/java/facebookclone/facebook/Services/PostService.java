package facebookclone.facebook.Services;

import facebookclone.facebook.Entity.Post;
import facebookclone.facebook.Repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;
@Service
public class PostService {

    @Autowired
    private  PostRepo postRepo;

    public List<Post> save(Post post){
        Date date=new Date(System.currentTimeMillis());
      //  long now =date.getTime();
        //Timestamp timestamp=new Timestamp(now);
        post.setLikes(0);
        post.setDateTime(date);
        post.setPostID(UUID.randomUUID().toString());
        postRepo.save(post);
        return find(post.getUserID());
    }

    public List<Post> find(String userId){
        List<Post> allPosts=postRepo.findByUserId(userId);
       allPosts.sort((Post p1 ,Post p2)->p1.getDateTime().compareTo(p2.getDateTime()));
        return allPosts;
    }
    public List<Post>delete(String postId,String userId){
        postRepo.deleteById(postId);
        return find(userId);
    }
}
