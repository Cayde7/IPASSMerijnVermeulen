package src.model.java;

import javax.crypto.KeyGenerator;
import java.security.Key;
import java.security.Signature;
import java.util.Calendar;

public class JWT {

    private static KeyGenerator MacProvider;
    final static public Key key = MacProvider.generateKey();

    private String createToken(String username, String role) throws JwtException {
        Calendar expiration = Calendar.getInstance();
        expiration.add(Calendar.MINUTE, 30);

        return Jwts.builder()
                .setSubject(username)
                .setExpiration(expiration.getTime())
                .claim("role", role)
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
    }

}
