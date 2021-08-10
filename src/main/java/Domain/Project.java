package Domain;

import lombok.*;


public class Project {
    private Long id;
    private String title;
    private Double cost;
    private String location;
    private Long projectNum;
    private String projectMan;

    public Project(){

    }
    public Long getId(){return id;}

    public void setId(Long id) {this.id = id; }

    public String getTitle(){return title;}

    public void setTitle(String title) { this.title = title; }

    public Double getCost(){return cost;}

    public void setCost(Double cost) { this.cost = cost; }

    public String getLocation(){return location;}

    public void setLocation(String location) { this.location = location; }

    public Long getProjectNum(){return projectNum;}

    public void setProjectNum(Long projectNum) {this.projectNum = projectNum; }

    public String getProjectMan() { return projectMan; }

    public void setProjectMan(String projectMan) { this.projectMan = projectMan; }
}
