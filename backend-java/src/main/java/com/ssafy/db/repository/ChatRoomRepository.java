package com.ssafy.db.repository;

import com.ssafy.api.dto.ChatRoomDTO;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Repository
public class ChatRoomRepository {
//
//    // 실제 서비스할 때는 MAP이 아닌 DB에 저장해두고 사용하라고 합니다.
//    // DB - chatroom -> id,
//    private Map<String, ChatRoomDTO> chatRoomDTOMap;
//
//    @PostConstruct
//    private void init(){
//        chatRoomDTOMap = new LinkedHashMap<>();
//    }
//
//    public List<ChatRoomDTO> findAllRooms(){
//        //채팅방 생성 순서 최근 순으로 반환
//        List<ChatRoomDTO> result = new ArrayList<>(chatRoomDTOMap.values());
//        Collections.reverse(result);
//
//        return result;
//    }
//
//    public ChatRoomDTO findRoomById(String id){
//        return chatRoomDTOMap.get(id);
//    }
//
//    public ChatRoomDTO createChatRoomDTO(String name){
//        ChatRoomDTO room = ChatRoomDTO.create(name);
//        chatRoomDTOMap.put(room.getRoomId(), room);
//
//        return room;
//    }
}
