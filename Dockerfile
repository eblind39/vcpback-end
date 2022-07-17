# official postgres image
FROM postgres:14.3
RUN echo 'Setting the progress database for Video Creator Platform (vcpdb)'

# declare default values by using environment variables,
# according to the official postgres image docs
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=vcpdb