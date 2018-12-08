class FlightsController < ApplicationController
  before_action :authenticate_request!
  before_action :f_manager_only, except: [:index]
  before_action :set_flight, only: [:show, :update, :destroy]

  # GET /flights
  def index
    render json: Flight.all each_serializer: FlightListSerializer
  end

  # GET /flights/1
  def show
    render json: @flight
  end

  # POST /flights
  def create
    begin
      @flight = Flight.new(flight_params)

      if @flight.save
        render json: @flight, status: :created, location: @flight
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  # PATCH/PUT /flights/1
  def update
    begin
      if @flight.update(flight_params)
        render json: @flight
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  # DELETE /flights/1
  def destroy
    begin
      if @flight.destroy
        render json: {}, status: :ok
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def flight_params
      params.require(:flight).permit(:from, :to, :flight_start, :flight_time, :lane_id, :airplane_id)
    end
end