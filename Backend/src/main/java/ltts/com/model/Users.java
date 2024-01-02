package ltts.com.model;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="users")
public class Users {
	
	@Id
	@Size(max = 40)
	private String emailid;
	@Column(nullable = false)
	@Size(max = 20)
	private String uname;
	@Column(nullable = false)
	
	private String pass;
	@Size(max = 50)
	private String address;
	
	@Column(nullable = false)
	private long mobile;
//	@ColumnDefault("user")
	@Column(nullable = false)
	private String type;
	public Users(@Size(max = 40) String emailid, @Size(max = 20) String uname, @Size(max = 20) String pass,
			@Size(max = 50) String address, @Size(max = 10) long mobile, String type) {
		super();
		this.emailid = emailid;
		this.uname = uname;
		this.pass = pass;
		this.address = address;
		this.mobile = mobile;
		this.type = type;
	}
	public Users() {
		super();
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Users [emailid=" + emailid + ", uname=" + uname + ", pass=" + pass + ", address=" + address
				+ ", mobile=" + mobile + ", type=" + type + "]";
	}
	
	
}
