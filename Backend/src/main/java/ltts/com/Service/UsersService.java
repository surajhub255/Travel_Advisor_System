package ltts.com.Service;

import java.util.List;

import ltts.com.model.Facilities;
import ltts.com.model.Users;

public interface UsersService {
	public boolean addUser(Users user);
	public boolean existEmail(String email);
	public boolean loginMatch(String emailid,String pass);
	public boolean editUser(String uname,String pass,long mobile,String address,String emailid);
	public Users getDetails(String emailid);
	
}
