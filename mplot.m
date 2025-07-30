function [X,Y,Z]=mplot(x)
[X,Y]=meshgrid(-x/10:x/500:x/10);
R = sqrt(X.^2/10 + Y.^2/10) + eps;
Z = sin(R/5) ./R;
end