package ltts.com.usersdao;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

import org.mindrot.jbcrypt.BCrypt;

import ltts.com.model.Users;
import ltts.com.usersjpa.UsersRepository;

@Repository
public class UsersDAOImpl implements UsersDAO{
	
	@Autowired
	private UsersRepository reposit;

	@Override
	public boolean addUser(Users user) {
		String pass = user.getPass();
		user.setPass(hashPass(pass));
		Users u=reposit.save(user);
		if(u!=null) {
			return true;
		}
		return false;
	}

	@Override
	public boolean existEmail(String email) {
		// TODO Auto-generated method stub
		Optional<Users> record = reposit.findById(email);
		 if(record!=null)
			 return true;
		return false;
	}
    
	
	@Override
	public String hashPass(String pass) {
		// TODO Auto-generated method stub
		return BCrypt.hashpw(pass, BCrypt.gensalt());
		
	}

	@Override
	public boolean checkPass(String pass, String hashpass) {
		// TODO Auto-generated method stub
		 return BCrypt.checkpw(pass, hashpass);
	}

	@Override
	public boolean loginMatch(String emailid, String pass) {
		// TODO Auto-generated method stub
		if(existEmail(emailid)) {
			String str=reposit.passMatch(emailid).getPass();
		if(checkPass(pass,str))
			return true;
		else 
			return false;
		}
			
		return false;
	}
	
	@Transactional
	@Override
	public boolean editUser(String uname, String pass, long mobile, String address, String emailid) {
		
		if(existEmail(emailid)) {
			if(reposit.editUser(uname,hashPass(pass) , mobile, address, emailid)>=1) {
				return true;
			}
			return false;
		}
		return false;
	}

	@Override
	public Users getDetails(String emailid) {
		if(existEmail(emailid)) {
			return reposit.getDetails(emailid);
		}
		return null;
	}
	


}
