package ltts.com.usersjpa;

import org.aspectj.lang.annotation.Around;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ltts.com.model.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, String>{
	
   @Query("select u from Users u where u.emailid=:emailid")
   Users passMatch(@Param("emailid") String emailid);
   
   @Query("select u from Users u where u.emailid=:emailid")
   Users getDetails(@Param("emailid") String emailid);
   
   @Modifying
   @Query("update Users u set u.uname=:uname,u.pass=:pass,u.mobile=:mobile,u.address=:address where u.emailid=:emailid")
   int editUser(@Param("uname") String uname,@Param("pass") String pass,@Param("mobile") long mobile,@Param("address") String address,@Param("emailid") String emailid);
}
