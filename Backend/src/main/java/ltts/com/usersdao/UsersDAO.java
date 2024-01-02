package ltts.com.usersdao;

import ltts.com.model.Users;

public interface UsersDAO {
	public boolean addUser(Users user);
	public boolean existEmail(String email);
	public String hashPass(String pass);
	public boolean checkPass(String pass,String hashpass);
	public boolean loginMatch(String emailid,String pass);
	public boolean editUser(String uname,String pass,long mobile,String address,String emailid);
	public Users getDetails(String emailid);
}
