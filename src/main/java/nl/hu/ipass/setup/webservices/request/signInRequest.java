package nl.hu.ipass.setup.webservices.request;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signIn")
public class signInRequest extends HttpServlet {

    // @EJB
    // private UserService userService;
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
    //     String username = request.getParameter("username");
    //     String password = request.getParameter("password");
    //     User user = userService.find(username, password);

    //     if (user != null) {
    //         request.getSession().setAttribute("user", user);
    //         response.sendRedirect("home");
    //     }
    //     else {
    //         request.setAttribute("error", "Unknown user, please try again");
    //         request.getRequestDispatcher("/login.jsp").forward(request, response);
    //     }

        Map<String, String> messages = new HashMap<String, String>();
        request.setAttribute("messages", messages);

       // Get and validate name.
       String name = request.getParameter("name");
       if (name == null || name.trim().isEmpty()) {
           messages.put("name", "Please enter name");
       } else if (!name.matches("\\p{Alnum}+")) {
           messages.put("name", "Please enter alphanumeric characters only");
       }
       request.getRequestDispatcher("/webapp/index.html").forward(request, response);
    }
}
