package com.ssafy.common.auth;

import java.util.Optional;

import com.ssafy.common.util.RedisUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.ssafy.api.service.UserService;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;


/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의.
 */
@Component
@RequiredArgsConstructor
public class SsafyUserDetailService implements UserDetailsService{
	@Autowired
	UserService userService;
	private final RedisUtil redisUtil;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    		User user = userService.getUserByEmail(email);
    		if(user != null) {
    			SsafyUserDetails userDetails = new SsafyUserDetails(user, redisUtil);
    			return userDetails;
    		}
    		return null;
    }
}

